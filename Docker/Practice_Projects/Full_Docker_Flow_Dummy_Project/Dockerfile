# Use an official Python image
FROM python:3.9

# Set working directory inside the container
WORKDIR /app

# Copy dependencies first to leverage Docker cache
COPY app/requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY app /app 

# Expose Flask port
EXPOSE 5000

# Run Flask app (correct path to app.py)
CMD ["python", "/app/src/app.py"]
