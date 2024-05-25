
import assemblyai as aai


aai.settings.api_key = "10535479a2da4344aeb172ac69453d6e"


FILE_URL = "gTTS.mp3"


transcriber = aai.Transcriber()
transcript = transcriber.transcribe(FILE_URL)

if transcript.status == aai.TranscriptStatus.error:
    print(transcript.error)
else:
    print(transcript.text)
