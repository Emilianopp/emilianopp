# Recreation Centre Traffic Analysis 
[View in Github Repository](https://github.com/Emilianopp/WeightRoomTraffic/blob/main/WeightRoomReport.pdf) 

Western Weight Room traffic analytics.
Please download read the formal report over at [the project repository](https://github.com/Emilianopp/WeightRoomTraffic/blob/main/WeightRoomReport.pdf) 

This project encompassed many python packages and was an end-end Data Science project

### Data Gathering

daily weather data was web-scraped using the python package Beautiful soup for the last 5 calendar years (2015-2020)

Twitter API was used in order to gather Recreation centre traffic for the last 5 years (2015-2020)


### Data Processing 
In order to obtain desired input structure, Data was cleansed, formatted and transformed using Pandas, Numpy as well as Scikit-learn 

### Modeling
Due to the data being sequenced via time, a Recurrent Neural Network was the choice of model.
To view exact hyperparameters and procedure used, please reference [the formal report](https://github.com/Emilianopp/WeightRoomTraffic/blob/main/WeightRoomReport.pdf) or the corresponding [jupyter notebook](https://github.com/Emilianopp/WeightRoomTraffic/blob/main/Notebooks/NUERAL_net.ipynb)


### Future goals
When the recreation centre reopens I have a few ideas on how to deploy this model to benefit my fellow students, below I list my future plans;

* Periodically downloading necessary data to make traffic prediction
* Obtain access to Weight Room's twitter account to obtain more data
* Make an infrastructure to periodically tweet daily weight room traffic once the facility re-opens
