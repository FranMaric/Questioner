import requests
import json
import html

baseUrl = "https://opentdb.com/api.php"

sessionTokenUrl = "https://opentdb.com/api_token.php?command=request"

categoriesUrl = "https://opentdb.com/api_category.php"

try:
    categories = requests.get(categoriesUrl).json()['trivia_categories']
except:
    quit()

try:
    f = open('sessionToken.txt', 'r')
    sessionToken = f.read()
    f.close()

except:
    sessionToken = requests.get(sessionTokenUrl).json()['token']

    f = open('sessionToken.txt', 'w')
    f.write(sessionToken)
    f.close()

try:
    questions = json.loads(open('questions.json', 'r').read())['questions']

    print('We have {} questions.'.format(len(questions)))
except:
    questions = []

index = 0
for cat in categories:
    while True:
        url = baseUrl + \
            "?amount=5&category={}&token={}".format(
                cat['id'], sessionToken)

        response = requests.get(url).json()

        if response['response_code'] == 0:
            for q in response['results']:
                if q not in questions:
                    q['question'] = html.unescape(q['question'])
                    questions.append(q)

        elif response['response_code'] == 4:
            print('We got all questions {}.'.format(index+1))
            break

        else:
            print('response_code: ' + str(response['response_code']))
            break

    with open('questions.json', 'w') as outfile:
        json.dump({'questions': questions}, outfile)

    index += 1

"""
Code 0: Success Returned results successfully.
Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
Code 3: Token Not Found Session Token does not exist.
Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
"""
