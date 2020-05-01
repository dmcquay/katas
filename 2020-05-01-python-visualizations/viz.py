import matplotlib.pyplot as plt
import pandas as pd

Covid = pd.read_csv("Covid.csv")
print(Covid.head())

#filter where iso_code = 'USA'
is_USA =  Covid['iso_code'] == 'USA'
Covid_USA = Covid[is_USA]
print(Covid_USA.head())

#Line Graph
x = Covid_USA["total_deaths"]
y = Covid_USA["date"]
plt.plot(x, y)
plt.savefig('out/line')

#Bar Graph
#%matplotlib inline
# plt.style.use('ggplot')
# x = Covid["location"]
# CountryTotalCases = Covid["total_cases"]
# x_pos = [i for i, _ in enumerate(x)]
# plt.bar(x_pos, CountryTotalCases, color='green')
# plt.xlabel("Countries")
# plt.ylabel("Total Cases")
# plt.title("Covid 19 Total Cases")
# plt.xticks(x_pos, x)
# plt.savefig('out/bar')

#Horizontal Bar Graph
# x = Covid["total_tests"]
# Country = Covid["location"]
# x_pos = [i for i, _ in enumerate(x)]
# plt.barh(x_pos, Country, color='green')
# plt.ylabel("Countries")
# plt.xlabel("total_tests")
# plt.title("Covid-19 County Total Tests")
# plt.yticks(x_pos, x)
# plt.savefig('out/bar-horizontal')

#Scatter Graph
# x = Covid["location"]
# y = Covid["new_cases"]
# plt.scatter(x,y, label='skitscat', color='k', s=25, marker="o")
# plt.xlabel('Countries')
# plt.ylabel('new_cases')
# plt.title('Country Covid-19 New Cases')
# plt.legend()
# plt.show()

#Histogram
# x = Covid["new_deaths"]
# plt.hist(x, bins = 2)
# plt.show()