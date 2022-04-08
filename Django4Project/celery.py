import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Django4Project.settings')

app = Celery('Django4Project')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
