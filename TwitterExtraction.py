
# coding: utf-8

# In[4]:


import sys
get_ipython().system('{sys.executable} -m pip install tweepy')

#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

#Variables that contains the user credentials to access Twitter API 
access_token = "1662638953-hbd3Cut04XJRIIsmST9Mj1Mp3adD5aRw2uk8Z0T"
access_token_secret = "IJ51hhcnRXSFPxbqaSpTZ9wwoJdiL5Rp6MNfnUU0LsQxT"
consumer_key = "5r2VpgUBh0RRQ007rGuBL2H6D"
consumer_secret = "GisYWJDPCMtNRUUq4Ou2MSkfUtgkfSKiuxyCXQVZP0t46bfjgl"


#This is a basic listener that just prints received tweets to stdout.
class StdOutListener(StreamListener):

    def on_data(self, data):
        print (data)
        return True

    def on_error(self, status):
        print (status)


if __name__ == '__main__':

    #This handles Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, l)

    #This line filter Twitter Streams to capture data by the keywords: 'Cambridge Analytica'
    stream.filter(track=['Cambridge Analytica'])

