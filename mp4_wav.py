import ffmpeg

def convert_mp4_to_wav(mp4_file_path, wav_file_path):
    ffmpeg.input(mp4_file_path).output(wav_file_path, format='wav').run()
    print(f"Converted {mp4_file_path} to {wav_file_path}")

if __name__ == "__main__":
    mp4_file_path = "vid2.mp4"
    wav_file_path = "vid2.wav"
    convert_mp4_to_wav(mp4_file_path, wav_file_path)
