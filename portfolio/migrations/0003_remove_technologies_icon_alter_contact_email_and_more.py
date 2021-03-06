# Generated by Django 4.0.1 on 2022-01-30 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_socialnetworks_link'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technologies',
            name='icon',
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.CharField(max_length=256, unique=True),
        ),
        migrations.AlterField(
            model_name='contact',
            name='phone_number',
            field=models.CharField(max_length=18, unique=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='project_name',
            field=models.CharField(max_length=96, unique=True),
        ),
        migrations.AlterField(
            model_name='socialnetworks',
            name='link',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='socialnetworks',
            name='social',
            field=models.CharField(max_length=32, unique=True),
        ),
        migrations.AlterField(
            model_name='technologies',
            name='tech_name',
            field=models.CharField(max_length=64, unique=True),
        ),
    ]
