module Chapter_4 where
-- 4.1)	Faça	uma	função	que	retorne	a	média	de	um		[Double], usando		foldl	.
  ex4_1 :: [Double] -> Double
  ex4_1 xs = total / qt
    where (total, qt) = foldl (\(s, q) x -> (s + x, q + 1)) (0, 0) xs

-- 4.2)	 Faça	 uma	função	 que	 receba	 uma	 	[String]		 e	 retorne todos	os	elementos	palíndromos.
  ex4_2_palindromo :: String -> Bool
  ex4_2_palindromo xs = xs == reverse xs 

  ex4_2 :: [String] -> [String]
  ex4_2 xs = filter ex4_2_palindromo xs

-- 4.3)	 Implemente	 uma	 função	 que	 filtre	 os	 números	 pares	 e outra	que	filtre	os	ímpares	de	uma	lista	recebida	via	parâmetro.
  ex4_3_par :: [Int] -> [Int]
  ex4_3_par xs = filter even xs

  ex4_3_impar :: [Int] -> [Int]
  ex4_3_impar xs = filter odd xs

-- 4.4)	 Filtre	 os	 números	 primos	 de	 uma	 lista	 recebida	 por parâmetro.
  ex4_4_primo :: Int ->  Bool
  ex4_4_primo num 
    | num < 2 = False 
    | otherwise = null [x | x <- [2..num-1], num `mod` x == 0]

  ex4_4_filtarPrimos :: [Int] -> [Int]
  ex4_4_filtarPrimos xs = filter ex4_4_primo xs

-- 4.5)	Implemente	uma	função	que	receba	uma	lista	de	inteiros	e retorne	o	dobro	de	todos,	eliminando	os	múltiplos	de	4.
  ex4_5 :: [Int] -> [Int]
  ex4_5 xs = map (* 2) $ filter (\x -> x `mod` 4 /= 0) xs

-- 4.6) Faça uma função func que receba uma função f de tipo (String -> String) , e uma String s que retorna o reverso de s concatenado com aplicação da função f em s .
  func :: (String -> String) -> String -> String
  func f s = reverse s ++ f s