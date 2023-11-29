import os
import sys
from langchain.document_loaders import TextLoader
from langchain.indexes import VectorstoreIndexCreator

import constants  # Assuming you have a constants module with your API key

def process_text(received_text):
    # Log or print the received text
    print(f"Processing text in GPT module: {received_text}")

    # Set the API key
    os.environ["OPENAI_API_KEY"] = constants.APIKEY

    # Example: Query the index using the received text
    loader = TextLoader('data.txt')
    index = VectorstoreIndexCreator().from_loaders([loader])

    result = index.query(received_text)
    
    return result

# This block will be executed if the script is run directly
if __name__ == "__main__":
    # Check if the required command-line argument is provided
    if len(sys.argv) < 2:
        print("Usage: gpt.py <query>")
        sys.exit(1)

    query = sys.argv[1]
    print("Query:", query)

    # Example: Call the process_text function with the provided query
    processed_result = process_text(query)
    print("Processed Result:", processed_result)
