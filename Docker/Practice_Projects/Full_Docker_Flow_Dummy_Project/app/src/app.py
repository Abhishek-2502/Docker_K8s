from flask import Flask, render_template
import psycopg2
import os

# Correct path for templates folder
app = Flask(__name__, template_folder="templates")

# Get database URL from environment variable
DATABASE_URL = os.getenv("DATABASE_URL")

def check_db_connection():
    """Attempts to connect to the database and returns status."""
    try:
        conn = psycopg2.connect(DATABASE_URL)
        conn.close()
        return "✅ Database connected successfully!"
    except Exception as e:
        return f"❌ Database connection failed: {str(e)}"

@app.route('/')
def home():
    db_status = check_db_connection()
    return render_template('index.html', message="Hello from Flask, Docker, and Abhishek Rajput!", db_status=db_status)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
