FROM python:3.8.2

WORKDIR /home/site/wwwroot

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
