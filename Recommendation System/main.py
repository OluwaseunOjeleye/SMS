from recommend import MovieRS

movie=['Avatar', 'Naruto Shippuden', 'Vampire Diaries', 'Ruroni Kenshi', 'Lord of the Rings', 'Legend of the Seeker', 'Jumanji']
movie_data=['animation action adventure war world elemental magic young boy reawakens undertake dangerous mystic quest fulfil destroy peace',
            'animation action adventure loud hyperactive adolescent approval recognition acknowledged leader strongest village',
            'drama fantasy horror lives dangers disasters town mystic fall creatures horror town teenage girl torn vampire brothers',
            'animation action adventure adventures young wandering swordman stumbles struggling martial arts school era',
            'adventure drama fantasy hobbit shire journey destroy powerful ring save earth dark lord',
            'action adventure drama mysterious murder father son search answers momentary fight tyranny',
            'action adventure comedy teenagers sucked magical video game escape work finish']



M=MovieRS(movie, movie_data)
M.Recommend('Avatar', 5)

# R=CountVectorizer(movie, movie_data)
# R.get_countVectorizerMatrix()
# R.get_OneSimMatrix('Avatar')


# Vector1=Vector([2,4,6,-2])
# Vector2=Vector([-1,2,1,-2])
# dot=Vector1.angleWith(Vector2)
# print(dot)

