# Generated by Django 4.1.7 on 2023-03-06 06:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_results_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='results',
            name='timestamp',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
