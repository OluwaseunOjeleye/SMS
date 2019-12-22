import math
import time
from sklearn.feature_extraction.text import CountVectorizer as CVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np
from .NLP import NLP


class CountVectorizer(object):

    ## Constructor
    def __init__(self, dataframe): ##BOW-Bags of Words
        self.dataframe=dataframe

    ##Method for appending user's plot to dataframe
    def append_PlotData(self, plot):
        self.dataframe=self.dataframe.append({
                    'actors':'', 
                    'directors':'',  
                    'genres':'',
                    'title':'',
                    'Plot':plot
                    }, ignore_index = True)
        return


    ##get count vectorizer matrix
    def get_BagOfWords(self):
        #creating bag of words column by merging all other column except from id column together
        self.dataframe['bag_of_words'] = self.dataframe[self.dataframe.columns[1:]].apply(
            lambda x: ' '.join(x.dropna().astype(str)),
            axis=1
        )

        ##removing symbols from bag of words column
        strings="[]',"
        for i in strings:
            self.dataframe['bag_of_words'] = self.dataframe['bag_of_words'].str.replace(i, '')

        ##converting all the words in bag of words' column to lower case
        self.dataframe['bag_of_words']=self.dataframe['bag_of_words'].str.lower()
        return


    # Void Method for getting Count Vectorizer Matrix
    def get_CVM(self):
        count=CVectorizer()
        self.CVM=count.fit_transform(self.dataframe['bag_of_words'])
        #print(self.dataframe['bag_of_words'][0])
        return


    ##Similarity Matrix for getting all similarities between all movies- returns a 2-D matrix
    def get_AllSimMatrix(self): ##get similarity matrix
        sim=[]
        sim=cosine_similarity(self.CVM, self.CVM)
        return sim
        

    ##Find the index of movie within title_list
    def find_Index(self, titlename):
        found=-1
        titles=pd.Series(self.dataframe.title)
        ##print(titles)
        for i in range (len(titles)):
            if(titles.get(key=i)==titlename):
                found=i
                break
        return found


    ##Similarity Matrix for a specific titlename- returns a 1-D matrix
    def get_OneSimMatrix(self, search_type, titlename):
        ##find titlename index
        if(search_type=="searchbyname"):
            index=self.find_Index(titlename) 
        elif(search_type=="searchbyplot"):
            index=len(self.dataframe)-1

        ## If user input not found return empty list
        if(index!=-1):
            sim=[]
            sim=cosine_similarity(self.CVM, self.CVM)
            return sim[index]
        else:
            print(titlename," doesnot exist in DB")
            return []


###################################################################################

class MovieRS(object): ##Movie Recommendation System
    
    def __init__(self, search_type, table, db_id_no):   ## movie name and no of movies to recommend
        self.dataframe=table    ##Movie Entity Table from DB 
        self.id_nos=db_id_no    ##List for storing all movies id
        self.search_type=search_type    ##search type requested by user

        ##Cleaning movies plots using NLP
        data=NLP(self.dataframe)   
        data.clean_Data()  #cleaning data
        self.dataframe=data.get_Data()

        self.R=CountVectorizer(self.dataframe)

        if(self.search_type=="searchbyname"):
            self.R.get_BagOfWords()         
            self.R.get_CVM()

    ##Method for recommending movie
    def Recommend(self, movie_name, n):
        ##Searching by movie name
        if (self.search_type=="searchbyname"):
            SIM_matrix=self.R.get_OneSimMatrix("searchbyname", movie_name)
            if(len(SIM_matrix)!=0):
                print("Done: ", time.time())

                # creating a Series with the similarity scores in descending order
                self.id_nos=(self.id_nos).id.values
                result=np.array((SIM_matrix, self.id_nos)).T

                #sorting result which is sim and db_id number
                result=result[result[:, 0].argsort()]

                #getting ids of first n movies to be recommended
                movie_ids=[]
                for i in range ((len(result)-2), 0, -1):
                    movie_ids.append(result[i][1])
                    if(len(result)-i-1==n): break
                return movie_ids

            else:
                return []

        #Searching by user's plot
        elif(self.search_type=="searchbyplot"):
            user_plot=movie_name
            self.R.append_PlotData(user_plot)
            self.R.get_BagOfWords()         
            self.R.get_CVM()
            SIM_matrix=self.R.get_OneSimMatrix("searchbyplot", "")
            
            #adding id of user plot as 0 inorder to make the matrix size equal to others
            self.id_nos=self.id_nos.append({'id':0}, ignore_index = True)

            # creating a Series with the similarity scores in descending order
            self.id_nos=(self.id_nos).id.values
            result=np.array((SIM_matrix, self.id_nos)).T

            #sorting result which is sim and db_id number
            result=result[result[:, 0].argsort()]

            #getting ids of first n movies to be recommended
            movie_ids=[]
            for i in range ((len(result)-2), 0, -1):
                movie_ids.append(result[i][1])
                if(len(result)-i-1==n): break
            return movie_ids

        else: return[]

        

                                
