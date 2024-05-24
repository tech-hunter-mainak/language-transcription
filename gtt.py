from gtts import gTTS
from googletrans import Translator

translator = Translator()

text = "হাই, আমার নাম আমান"


result = translator.translate("হাই, আমার নাম আমান", dest="en")

lan = result.src

# # translated = translator.translate(text, src="tr", dest="en").text
# # print(translated)

# # lang = translator.detect.text
# # print(text.src)

# print(f"Translating the following text:\n{result.origin}\nDetected language code is {result.src}")
# print(f"Here's the result:\n{result.text}\nTarget language code is {result.dest}")


speech = gTTS(text=text, lang=lan, tld="com.au")
speech.save("bn.mp3")