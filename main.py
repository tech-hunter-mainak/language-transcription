import requests
import time

AUDIO_URL = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DWNhNj_dAp2E&ved=2ahUKEwjA84e2_aWGAxWEamwGHSWlAc4QtwJ6BAgaEAI&usg=AOvVaw3YGOS271Plos8sEYxND4v0'
API_KEY = '10535479a2da4344aeb172ac69453d6e'

HEADERS = {
    'authorization': API_KEY,
    'content-type': 'application/json'
}

URL = 'https://api.assemblyai.com/v2/transcript'

res = requests.post(URL, 
    json = {'audio_url': AUDIO_URL},
    headers = HEADERS)

transcript_id = res.json()['id']

while True:
    polling_endpoint = URL + '/' + transcript_id
    res = requests.get(polling_endpoint, headers = HEADERS)

    if res.json()['status'] == 'completed':
        # filename = transcript_id + 'text'
        # with open(filename, 'w') as f:
        #     f.write(res.json()['text'])
        print(res)        

        break