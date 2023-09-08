from django.db import models

class Record(models.Model):
    class RatesChoices(models.TextChoices):
        NOT_DECIDED = 'not_decided','Не определился'
        PROMOTIONAL = 'promotional','Акционный тариф'
        GROUP = 'group','Хочу в группе больше'
        ONE_ON_ONE = 'one_on_one', 'Давай один на один'
        ONE_ON_ONE_2 = 'one_on_one_2','Давай один на один 2.0'

    name = models.CharField('Имя', max_length=300, blank=False, default='')
    email = models.EmailField('Email', max_length=254)
    phone = models.CharField('Номер телефона', max_length=300, blank=False, default='')
    rate = models.CharField('Тариф', max_length=30, choices=RatesChoices.choices, default=RatesChoices.NOT_DECIDED)
    creation_date = models.CharField('Дата создания', max_length=100, blank=False, default='')

    class Meta:
        verbose_name = 'Запись на занятие'
        verbose_name_plural = 'Записи на занятие'

    def __str__(self):
        return self.name