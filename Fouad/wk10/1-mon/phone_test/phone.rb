class Phone
	def initialize (num)
		@num = num
	end	

	def number
		if @num.length < 10
			return "0000000000"		 
		elsif @num.length == 11 && @num[0] != "1"
			split_num = @num.split("")
			split_num.shift()
			joined_num = split_num.join("")
			joined_num.gsub(/[\d]/,"0")	
		elsif @num.length == 11
			split_num = @num.split("")
			split_num.shift()
			split_num.join("")
		else	
			@num.gsub(/[\D]/,"")
		end

	end
		def area_code
			@num = @num.slice(0, 3)
		end

		def to_s
			"(#{@num[0..2]}) #{@num[3..5]}-#{@num[6..9]}"
		end	
end