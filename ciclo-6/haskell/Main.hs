  maiorQue :: Int -> Int -> Bool
  maiorQue x y = (>) x y

  dobroLista :: [Int] -> [Int]
  dobroLista xs = [2*x | x<-xs]

  foo :: Char -> Int -> (Int, String)
  foo x y = (y+9, x:[x])