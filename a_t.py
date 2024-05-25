import speech_recognition as sr

def transcribe_audio(file_path):
    
    recognizer = sr.Recognizer()

    with sr.AudioFile(file_path) as source:
        audio_text = recognizer.record(source)

    try:
   
        text = recognizer.recognize_google(audio_text)
      
        return recognizer.recognize_google(audio_text)
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand the audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))

if __name__ == "__main__":
    audio_file_path = "vid2.wav"
 
   
    with open("transcription.txt", "w") as file:
        file.write(transcribe_audio(audio_file_path))
