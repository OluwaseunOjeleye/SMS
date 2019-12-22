from rake_nltk import Rake

class NLP(object):
    def __init__(self, moviename, genre, director, actors, plot):
        self.moviename=moviename  ## movie name list
        self.genre=genre    ##movie genre list
        self.director=director    ## movie directors list
        self.actors=actors     ## movieactors list
        self.plot=plot

    ##get count vectorizer matrix
    def clean_Data(self):
        for i in range (len(self.plot)):
            r = Rake() # Uses stopwords for english from NLTK, and all puntuation characters.
            r.extract_keywords_from_text(self.plot[i])

            # getting the dictionary whith key words as keys and their scores as values
            key_words_dict = r.get_word_degrees()

            # assigning the key words to the new column for the corresponding movie
            self.plot[i]=" ".join(list(key_words_dict.keys()))

    def get_Data(self):
        data=[]
        for i in range (len(self.moviename)):
            data.append(self.genre[i]+" "+self.director[i]+" "+self.actors[i]+" "+self.plot[i])
        return data


####################################### Testing the NLP Class ############################################
movie=['Avatar', 'Naruto Shippuden', 'Vampire Diaries', 'Ruroni Kenshi', 'Lord of the Rings', 'Legend of the Seeker', 'Jumanji']
genre=['animation action adventure', 'animation action adventure', 'drama fantasy horror', 'animation action adventure', 'adventure drama fantasy', 'action adventure drama', 'action adventure comedy' ]
movie_data=['On the lush alien world of Pandora live the Navi, beings who appear primitive but are highly evolved. Because the planets environment is poisonous, human/Navi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Navi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.',
            'Naruto is a story about a boy, a resident of the Hidden Leaf Village, who witnessed pain since he was born and strives hard to achieve recognition in his own village by vowing to himself to become the village leader. He shares a friendly relation with another kid Sasuke who is a genius unlike him who wishes to avenge the death of his clan by killing his elder brother',
            'Vampire brothers, Stefan and Damon Salvatore, battle for the affection of selfless teenager, Elena Gilbert. Stefan is the good and kind hearted brother that feeds on animal blood to keep from killing anybody, and Damon is the selfish and dangerous older brother that feeds on human blood carelessly. Elena is brought into the supernatrual world that she was hidden from as a girl, and surrounds herself with a circle of human AND supernatrual friends, ready to fight the hunters and enemies that wait for them in the shadows.',
            ' The adventures of a young wandering swordsman who stumbles upon a struggling martial arts school in Meiji era Japan',
            "Confused with his own feelings about Rayyan and J.J.'s impending marriage, Amaar decides to go back to Toronto to his old life. There, his parents express their concerns about his life in Mercy. He treats all his encounters, even dates and his law clients, like he was counseling as an Imam. Back in Mercy, Baber is happy in his new old role as acting Imam, but no one else is happy. Yasir decides to go to Toronto to see if he can talk Amaar into coming back to Mercy. With Rayyan and J.J.'s engagement, J.J. finally gives Rayyan an engagement ring, the ring which is a family heirloom. It is a large ostentatious ring which Rayyan hates. She doesn't know whether to tell J.J. her feelings. But Rayyan also sees the ring as a symbol that J.J. does not really know her as a person, and she's not too sure if she wants to marry a man that doesn't know her deepest thoughts and feelings.",
            "After the mysterious murder of his father, a son's search for answers begins a momentous fight against tyranny.",
            'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.']

director=['director1', 'director2', 'director3', 'director4', 'director5', 'director6', 'director7']
actors=['actors1', 'actors2', 'actors3', 'actors4', 'actors5', 'actors6', 'actors7']


# N=NLP(movie, genre, director, actors, movie_data)
# N.clean_Data()
# print(N.get_Data())