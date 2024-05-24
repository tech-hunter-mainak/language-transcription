import assemblyai as aai

aai.settings.api_key = "10535479a2da4344aeb172ac69453d6e"

transcriber = aai.Transcriber()
transcript = transcriber.transcribe("gTTS.mp3")

# print(transcript.text)

t = transcript.text #None ??

print(t)

# with open("bn.txt", 'w') as file:
#     file.write(t)