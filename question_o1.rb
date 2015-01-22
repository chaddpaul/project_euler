require 'pry'
#Euler Questions

def euler_sum(num_input)
  numbers_array = Array.new(1000){|index|index}
  multiples_of_3_or_5 =[]
  numbers_array.each do |index|
    if(index%3==0 || index%5==0)
      multiples_of_3_or_5.push(index)
    end
  end
  sum = (multiples_of_3_or_5.inject(:+))
end



