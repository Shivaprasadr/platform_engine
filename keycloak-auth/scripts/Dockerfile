FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt ./

RUN apt-get update && apt-get install -y \
    wget unzip curl \
    chromium chromium-driver \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

# Set environment variables
ENV PYTHONPATH=/app
ENV KEYCLOAK_URL=http://keycloak:8080/

COPY . .

ENTRYPOINT ["python", "entrypoint.py"]
