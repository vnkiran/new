from django.db import models
from datetime import datetime

# Create your models here.
class Results(models.Model):
    image = models.ImageField(upload_to = "images/",null=True, blank = True)
    student_name = models.CharField(max_length=30)
    roll_number = models.IntegerField(default=0)
    telugu = models.IntegerField(default=0)
    english = models.IntegerField(default=0)
    botany = models.IntegerField(default=0)
    zoology = models.IntegerField(default=0)
    physics = models.IntegerField(default=0)
    chemistry = models.IntegerField(default=0)
    author = models.CharField(max_length=55)
    timestamp = models.DateTimeField(default=datetime.now,blank=True)
    '''
    def __str__(self):
        return self.image'''

    def __str__self():
        return self.image
    
             
             
    '''    User = get_user_model()

class Author(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField()

    def __str__(self):
        return self.user.username

class Category(models.Model):
    title = models.CharField(max_length=20)

    def __str__(self):
        return self.title
    

class Post(models.Model):
    title = models.CharField(max_length=50)
    overview = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    comment_count = models.IntegerField(default=0)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    thumbnail = models.ImageField()
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.title
    '''


