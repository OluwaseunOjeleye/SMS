

# SMS Movie Suggester Web App

## Problem Statement

Selecting the right and perfect movie to watch based on a mixture of genre and plot movie
watchers have in mind is not easy and this process takes a lot of time. A movie recommendation
web-based application that recommends movies (using movies features and some algorithms)
to a user without requiring users details can be developed to give users a better experience
whenever they want to watch a movie.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

#### Backend:
```
pip install django djangorestframework django-cors-headers rake-nltk numpy scipy sklearn pandas

```
#### Frontend:
```
$ npm install axios react-router-dom antd
```
### Downloading SMS APP
Cloning The GitHub Repository

```
git clone https://53un@bitbucket.org/53un/sms.git
```
### Installing
Once you've cloned the repository and installed all the prerequisites, you're just a few steps away from running the app.

Firstly, you have to install the dependencies needed to start the application, run this in the frontend folder from the command-line:

```
$ npm install
```


### Running the Application
#### Running the Frontend:
Run this in the frontend folder from the command-line:

```
$ npm start
```
The frontend part of the application should run on port 3000 with the development environment configuration, so in your browser just go to http://localhost:3000

#### Running the Backend:
Run this in the backend folder from the command-line:

```
$ python manage.py runserver
```
The backend part of the application should run on port 8000 with the development environment configuration, so in your browser just go to http://localhost:8000

That's it! The application should be running.

## Built With
* [Django Web Framework](https://www.fullstackpython.com/django-orm.html) - The web framework used
* [Django REST Framework](https://www.django-rest-framework.org) - Rest API tool used
* [React Web Framework](https://reactjs.org) - The web framework used
* [Numpy](https://numpy.org/) and [Pandas](https://pandas.pydata.org/)- libraries used for data manipulation and analysis
* [Scikit-learn Machine Learning Library](https://scikit-learn.org/stable) - The machine learning library used 
* [Rake-nltk](https://pypi.org/project/rake-nltk) - library used for Natural Language Processing(NLP) keyword extraction


## Authors

* **Amal Ahmed** - *Initial work* - [Github](https://github.com/amalshaf)
* **Jamiu Oluwaseun Ojeleye** - *Initial work* - [Github](https://github.com/oluwaseunojeleye)
* **Selen KUTANOĞLU** - *Initial work* - [Github](https://github.com/selenkutanoglu)

## Acknowledgments

* Thanks to our lecturer Sedat Görmüş, PhD for giving us a project to boost our skills :)
