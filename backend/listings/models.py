from django.db import models
from django.utils.timezone import now
from businessmans.models import Businessman

# Create your models here.

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = "For Sale!"
        FOR_RENT = "For Rent!"

    class HomeType(models.TextChoices):
        HOUSE = 'House'
        GUEST_HOUSE = 'Guest House'
        TOWN_HOUSE = 'Town House'

    businessman = models.ForeignKey(Businessman, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=200, unique=True)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=20)
    description = models.TextField(max_length=500, blank=True)
    sale_type = models.CharField(max_length=100, choices=SaleType.choices, default=SaleType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=100, choices=HomeType.choices, default=HomeType.HOUSE)
    sqrft = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title