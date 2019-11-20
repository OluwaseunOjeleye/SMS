import math
import time
from sklearn.feature_extraction.text import CountVectorizer as CVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class CountVectorizer(object):

    def __init__(self, title_list, data): ##BOW-Bags of Words
        self.title_list=title_list  ##movie name list
        self.data=data              ##movie data list
        self.CVM=[]         ##List of vector for storing each titlename/movie word count vector

    ##get count vectorizer matrix
    def get_CVM(self):
        #creating bag of words
        count=CVectorizer()
        self.CVM=count.fit_transform(self.data).toarray()


    ##Similarity Matrix for all titlename- returns a 2-D matrix
    def get_AllSimMatrix(self): ##get similarity matrix
        sim=[]
        sim=cosine_similarity(self.CVM, self.CVM)
        return sim

    ##Find the index of titlename within title_list
    def find_Index(self, titlename):
        found=-1
        for i in range (len(self.title_list)):
            if(self.title_list[i]==titlename):
                found=i
                break
        return found


    ##Similarity Matrix for a specific titlename- returns a 1-D matrix
    def get_OneSimMatrix(self, titlename):
        index=self.find_Index(titlename) ##find titlename index
        if(index!=-1):
            sim=[]
            sim=cosine_similarity(self.CVM, self.CVM)
            return sim[index]
        else:
            print(titlename," doesnot exist in DB")
            return


###################################################################################

class MovieRS(object): ##Movie Recommendation System
    
    def __init__(self, movie_name_list, movie_data):   ## movie name and no of movies to recommend
        self.movie_name_list=movie_name_list
        self.movie_data=movie_data
        self.R=CountVectorizer(self.movie_name_list, self.movie_data)

        print("Count vectorizer Completed: ", time.time())
        self.R.get_CVM()
        print("Count vectorizer matrix Completed: ", time.time())

    ##Method for recommending movie
    def Recommend(self, movie_name, n):
        SIM_matrix=self.R.get_OneSimMatrix(movie_name)
        print("Done: ", time.time())

        movie_sim=list()     ##List Tuple
        for i in range (len(self.movie_name_list)):
            data=(self.movie_name_list[i], SIM_matrix[i])
            movie_sim.append(data)

        movie_sim.sort(key=lambda tup: tup[1])
        for i in range (n):
            print(movie_sim[len(movie_sim)-i-2])
                                

