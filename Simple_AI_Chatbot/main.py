from openai import OpenAI, OpenAIError, RateLimitError
from dotenv import load_dotenv
import os

load_dotenv()  # This loads the variables from .env
api_key = os.environ['OPENAI_API_KEY']
client = OpenAI(api_key=api_key)

def gpt_chat_function(prompt):
    try:
        completion = client.completions.create(
            model="gpt-3.5-turbo",
            prompt=prompt,
            max_tokens=150,  # You can adjust this value
            n=1,
            stop=None,
            temperature=0.7  # Adjust the creativity of the response
        )
        return completion.choices[0].text.strip()
    except RateLimitError:
        print("Rate limit exceeded - try again later.")
        return "Rate limit exceeded."
    except OpenAIError as e:
        print(f"An error occurred: {e}")
        return "An error occurred."

def main():
    while True:
        user_input = input("Me: ")
        if user_input.lower() in ["quit", "exit", "bye", "done"]:
            break
        completion = gpt_chat_function(user_input)
        print("ChatBot: ", completion)


if __name__ == "__main__":
    main()
