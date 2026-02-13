import requests

print("Hello, World from Docker!")
print("Requests module is working:", requests.get("https://www.google.com").status_code)
print(requests.__version__)