module Chapter_3 where
-- 3.2)	Faça	o	tipo		Temperatura		que	pode	ter	valores		Celsius	,	Farenheit		ou		Kelvin	.	Implemente	as	funções:	
  data Temperatura = Celsius | Kelvin | Farenheit
  -- converterCelsius	:	recebe	um	valor		double		e	uma temperatura,	e	faz	a	conversão	para	Celsius. 	
  ex3_2_converterCelsius :: Double -> Temperatura -> Double
  ex3_2_converterCelsius valor Celsius = valor
  ex3_2_converterCelsius valor Kelvin = valor - 273.15
  ex3_2_converterCelsius valor Farenheit = ( valor - 32) * 5/9

  -- converterKelvin	:	recebe	um	valor		double		e	uma temperatura,	e	faz	a	conversão	para	Kelvin. 
  ex3_2_converterKelvin :: Double -> Temperatura -> Double
  ex3_2_converterKelvin valor Celsius = valor + 273.15
  ex3_2_converterKelvin valor Kelvin = valor
  ex3_2_converterKelvin valor Farenheit = (valor - 32) * 5 / 9 + 273.15

  -- converterFarenheit	recebe	 um	 valor	 	double e uma	temperatura,	e	faz	a	conversão	para	Farenheit.
  ex3_2_converterFarenheit :: Double -> Temperatura -> Double
  ex3_2_converterFarenheit valor Celsius = (valor * 9 / 5) + 32
  ex3_2_converterFarenheit valor Kelvin = (valor - 273.15) * 9 / 5 + 32
  ex3_2_converterFarenheit valor Farenheit = valor

-- 3.3)	 Implemente	 uma	função	 que	 simule	 o	 vencedor	 de	 uma partida	 de	 pedra,	 papel	 e	 tesoura	 usando	 tipos	 criados.	 Casos	 de empate	devem	ser	considerados	em	seu	tipo.
  data Jogada = Pedra | Papel | Tesoura deriving (Show)
  data Resultado = Player1 | Player2 | Empate deriving (Show)

  ex3_3 :: Jogada -> Jogada -> Resultado
  ex3_3 Pedra Pedra     = Empate
  ex3_3 Papel Papel     = Empate
  ex3_3 Tesoura Tesoura = Empate

  ex3_3 Pedra Tesoura   = Player1
  ex3_3 Papel Pedra     = Player1
  ex3_3 Tesoura Papel   = Player1

  ex3_3 Tesoura Pedra   = Player2
  ex3_3 Pedra Papel     = Player2
  ex3_3 Papel Tesoura   = Player2

-- 3.4)	 Faça	 uma	 função	 que	 retorne	 uma	 string,	 com	 todas	 as vogais	maiúsculas	e	minúsculas	eliminadas	de	uma	string	passada por	parâmetro	usando	list	compreenshion
  ex3_4 :: String -> String
  ex3_4 xs = [x | x <- xs, (x `notElem` "aeiouAEIOU")]

-- 3.5) Sabe-se que as unidades imperiais de comprimento podem ser Inch , Yard ou Foot (há outras ignoradas aqui). Sabe-se que 1in=0.0254m , 1yd=0.9144m , 1ft=0.3048 . Faça a função converterMetros que recebe a unidade imperial e o valor correspondente nesta unidade. Esta função deve retornar o valor em metros.
  data UnidadeImperial = Inch | Yard | Foot
  converterMetros :: UnidadeImperial -> Double -> Double
  converterMetros Inch valor = valor / 39.37
  converterMetros Yard valor = valor / 1.094
  converterMetros Foot valor = valor / 3.281

  -- Implemente	 também	 a	 função	 	 converterImperial	 ,	 querecebe	um	valor	em	metros	e	a	unidade	de	conversão.	Esta	função deve	retornar	o	valor	convertido	para	a	unidade	desejada.
  converterImperial :: Double -> UnidadeImperial -> Double
  converterImperial valor Inch = valor * 39.37
  converterImperial valor Foot = valor * 3.281
  converterImperial valor Yard = valor * 1.094

-- 3.6)  Faça um novo tipo chamado Mes , que possui como valores todos os meses do ano. Implemente:
  data Mes = 
      Janeiro | Fevereiro | Marco 
      | Abril | Maio | Junho 
      | Julho | Agosto | Setembro
      | Outubro | Novembro | Dezembro 
      deriving Show

  -- A função checaFim , que retorna o número de dias que cada mês possui (considere fevereiro tendo 28 dias).
  diasMes :: Mes -> Int
  diasMes Janeiro = 31
  diasMes Fevereiro = 28
  diasMes Marco = 31
  diasMes Abril = 30
  diasMes Maio = 31
  diasMes Junho = 30
  diasMes Julho = 31
  diasMes Agosto = 31
  diasMes Setembro = 30
  diasMes Outubro = 31
  diasMes Novembro = 30
  diasMes Dezembro = 31

  checaFim :: [Mes] -> [Int]
  checaFim xs = map diasMes xs

  -- A função prox , que recebe um mês atual e retorna o próximo mês.
  prox :: Mes -> Mes
  prox Janeiro = Fevereiro
  prox Fevereiro = Marco
  prox Marco = Abril
  prox Abril = Maio
  prox Maio = Junho
  prox Junho = Julho
  prox Julho = Agosto
  prox Agosto = Setembro
  prox Setembro = Outubro
  prox Outubro = Novembro
  prox Novembro = Dezembro
  prox Dezembro = Janeiro

  -- A função estacao , que retorna a estação do ano de acordo com o mês e com o hemisfério.
  data Hemisferio = Norte | Sul | Leste | Oeste
  data Estacao = Sol | Chuva  deriving Show

  estacao :: Mes -> Hemisferio -> Estacao
  estacao Janeiro Norte = Chuva
  estacao Janeiro Sul = Sol
  estacao Janeiro Leste = Chuva
  estacao Janeiro Oeste = Sol
  estacao _ _ = Sol

-- 3.7) Faça	 uma	 função	 que	 receba	 uma	 	String		 e	 retorne	True		se	esta	for	um	palíndromo;	caso	contrário, False	.
  ex3_7 :: String -> Bool
  ex3_7 xs = xs == reverse xs 

-- 3.10)	 Faça	 uma	 função	 chamada	 	revNum	,	 que	 receba	 uma String		s		e	um	Int	n	.	Esta	deverá	retornar	as	n	primeiras	letras em	ordem	reversa	e	o	restante	em	sua	ordem	normal.
  ex3_10 :: Int -> String -> String
  ex3_10 num string = reverse (take num string) ++ drop num string

-- 3.17) Faça o tipo Cripto que possua dois values constructors Mensagem e Cifrado , ambos com um campo String e um value constructor Erro . Faça as funções encriptar e decriptar
  data Cripto = Mensagem String | Cifrado String | Erro deriving Show

  encriptar :: Cripto -> Cripto
  encriptar (Mensagem msg) = Cifrado (map succ msg)
  encriptar _ = Erro

  decriptar :: Cripto -> Cripto
  decriptar (Cifrado c) = Mensagem (map pred c)
  decriptar _ = Erro