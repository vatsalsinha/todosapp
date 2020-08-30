from django.db import models

# Create your models here.
class Todo(models.Model):
    detail = models.TextField(blank=True, null = True)
    timestamp = models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.detail
