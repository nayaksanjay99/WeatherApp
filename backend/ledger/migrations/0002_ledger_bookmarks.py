# Generated by Django 2.1.7 on 2019-03-24 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ledger', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ledger',
            name='bookmarks',
            field=models.CharField(default='null', max_length=2000000),
            preserve_default=False,
        ),
    ]