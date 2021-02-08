# Generated by Django 3.1.2 on 2021-02-05 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_auto_20210205_0124'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slider1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('S1Title1', models.CharField(max_length=500)),
                ('S1Title2', models.CharField(max_length=500)),
                ('S1Tag', models.CharField(max_length=900)),
                ('S1Image', models.ImageField(upload_to='static/sliderImage')),
            ],
        ),
        migrations.CreateModel(
            name='Slider2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('S2Title1', models.CharField(max_length=500)),
                ('S2Title2', models.CharField(max_length=500)),
                ('S2Tag', models.CharField(max_length=900)),
                ('S2Image', models.ImageField(upload_to='static/sliderImage')),
            ],
        ),
        migrations.DeleteModel(
            name='Slider',
        ),
    ]