# Generated by Django 3.1.2 on 2021-02-04 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SliderImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Image1', models.ImageField(upload_to='static/sliderImage')),
                ('Image2', models.ImageField(upload_to='static/sliderImage')),
            ],
        ),
    ]
