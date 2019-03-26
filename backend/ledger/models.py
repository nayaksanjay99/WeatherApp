from django.db import models


class Ledger(models.Model):
    name=models.CharField(max_length=100)
    surname=models.CharField(max_length=100)
    mailid=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    bookmarks=models.CharField(max_length=1000000000)

    def __str__(self):
        return self.mailid
