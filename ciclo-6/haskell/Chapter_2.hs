module Chapter_2 where
-- 2.1 Gere as Listas:
  -- a) [1,11,121,1331,14641,161051,1771561]
    ex2_1a :: [Int]
    ex2_1a = [ 11^x | x <- [1..6] ]

  -- b) [1,2,3,5,6,7,9,10,11,13,14,15,17,18,19,21,22,23,25,26,27,29,30,31,33,34,35,37,38,39]
    ex2_1b :: [Int]
    ex2_1b = [ x | x <- [1..40], mod x 4 /= 0 ]

  -- c)		["AaBB",	 "AbBB",	 "AcBB",	 "AdBB",	 "AeBB",	 "AfBB", "AgBB"]
    ex2_1c :: [String]
    ex2_1c = [ 'A':x:"BB" | x <- ['a'..'g'] ]

  -- d)		[5,8,11,17,20,26,29,32,38,41]	
    ex2_1d :: [Int]
    ex2_1d = [  5 + (x - 1) * 3 | x <- [1..13] ]

  -- e)		[1.0,0.5,0.25,0.125,0.0625,0.03125]	
    ex2_1e :: [Double]
    ex2_1e = [1/2^x | x <- [1..5]]

  -- f)		[1,10,19,28,37,46,55,64]	
    ex2_1f :: [Int]
    ex2_1f = [1 + (x - 1) * 9 | x <- [1..8]]

  -- g)		[2,4,8,10,12,16,18,22,24,28,30]	
    ex2_1g :: [Int]
    ex2_1g = [ 2 + (x - 1) * 2 | x <- [1..15], x `notElem` [3,7,10,13]]

  -- h)		['@','A','C','D','E','G','J','L']
    ex2_1h :: [Char]
    ex2_1h = '@' : [x | x <- ['A'..'L'], x `notElem` ['B', 'F', 'H', 'I', 'K']]

-- 2.2 Crie	 uma	 função	 que	 verifique	 se	 o	 tamanho	 de	 uma String	é	par	ou	não.	Use		Bool	como	retorno.
  ex2_2 :: String -> Bool
  ex2_2 xs = even (length xs)

-- 2.3)	 Escreva	 uma	 função	 que	 receba	 um	 vetor	 de	 Strings	 e retorne	uma	lista	com	todos	os	elementos	em	ordem	reversa.
  ex2_3 ::[String] -> [String]
  ex2_3 xs = reverse [reverse x | x <- xs]

-- 2.4)	 Escreva	 uma	 função	 que	 receba	 um	 vetor	 de	 Strings	 e retorne	 uma	lista	 com	 o	 tamanho	 de	 cada	 String.	As	palavras	 de tamanho	par	devem	ser	excluídas	da	resposta.
  ex2_4 :: [String] -> [Int]
  ex2_4 xs = [length x | x <- xs, odd (length x)]

-- 2.5)	Escreva	a	função		head		como	composição	de	duas	outras.
  ex2_5 :: [Int] -> Int
  ex2_5 = last.reverse

-- 2.6)	Faça	uma	função	que	receba	uma	String	e	retorne		True se	esta	for	um	palíndromo;	caso	contrário, False	.
  ex2_6 :: String -> Bool
  ex2_6 xs = xs == reverse xs 

-- 2.7	 Faça	 uma	 função	 que	 receba	 um	 inteiro	 e	 retorne	 uma tupla,	contendo:	o	dobro	deste	número	na	primeira	coordenada,	o triplo	na	segunda,	o	quádruplo	na	terceira	e	o	quíntuplo	na	quarta.
  ex2_7 :: Int -> (Int, Int, Int, Int)
  ex2_7 x = (x*2, x*3, x*4, x*5)