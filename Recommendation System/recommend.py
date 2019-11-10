import math
import time

class Vector(object):

    def __init__(self, name, array):
        self.array=array
        self.name=name

    def __mul__(self, vec_obj): 
        if (len(self.array)!=len(vec_obj.array)):
            print("Vectors in different dimension")
            return

        dot_sum=0
        for i in range (len(self.array)):
            dot_sum=dot_sum+(self.array[i]*vec_obj.array[i])
        return dot_sum

    def magnitude(self):
        mag=0.0
        for i in range (len(self.array)):
            mag=mag+((self.array[i])**2)
        return math.sqrt(mag)

    def angle_with(self, vec_obj):
        if (len(self.array)!=len(vec_obj.array)):
            print("Vectors in different dimension")
            return

        dot=self*vec_obj
        return dot/(self.magnitude()*vec_obj.magnitude())

    def print_vector(self):
        print(self.name,"-",self.array)
#####################################################################

class CountVectorizer(object):

    def __init__(self, title_list, data): ##BOW-Bags of Words
        self.title_list=title_list
        self.data=data
        self.CVM=[]         ##List of vector for storing each titlename/movie word count vector
       
    ##an efficient function for counting no if sub-strings in a string 
    def frequency(self, string, sub_string):  
        split=string.split()
        return split.count(sub_string)


    ##get count vectorizer matrix
    def get_CVM(self):
        #creating bag of words
        BOW=[]
        for i in range (len(self.data)):
            split=[]
            split=self.data[i].split()
            for j in range (len(split)):
                if (split[j] not in BOW):
                    BOW.append(split[j])
        ##print("Bag of word created at: ", time.time())
        
        #creating count vectorizer matrix/sparse matrix
        title_vector=[]
        for i in range (len(self.data)):
            freq_array=[]                   ##each message/title/movie frequency array
            for j in range (len(BOW)):
                #freq_array.append(self.frequency(self.data[i], BOW[j]))
                freq_array.append(self.data[i].split().count(BOW[j]))
            title_vector.append(Vector(self.title_list[i], freq_array))

        #print("Matrix created at: ", time.time())

        # print(BOW)
        # for i in range (len(self.data)):
        #     title_vector[i].print_vector()

        self.CVM=title_vector
        return title_vector


    ##Similarity Matrix for all titlename- returns a 2-D matrix
    def get_AllSimMatrix(self): ##get similarity matrix
        sim=[]
        for i in range (len(self.CVM)):
            sim.append([])
            for j in range (len(self.CVM)):
                sim[i].append(self.CVM[i].angle_with(self.CVM[j]))
        
        print(sim)
        return sim

    ##Find the index of titlename within title_list
    def FindIndex(self, titlename):
        found=-1
        for i in range (len(self.title_list)):
            if(self.title_list[i]==titlename):
                found=i
                break
        return found


    ##Similarity Matrix for a specific titlename- returns a 1-D matrix
    def get_OneSimMatrix(self, titlename):
        index=self.FindIndex(titlename) ##find titlename index
        if(index!=-1):
            sim=[]
            for i in range (len(self.CVM)):
                sim.append(self.CVM[index].angle_with(self.CVM[i]))

            #print(sim)
            return sim
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
        movie_sim=list()     ##List Tuple
        for i in range (len(self.movie_name_list)):
            data=(self.movie_name_list[i], SIM_matrix[i])
            movie_sim.append(data)

        movie_sim.sort(key=lambda tup: tup[1])
        for i in range (n):
            print(movie_sim[len(movie_sim)-i-2])
                                

