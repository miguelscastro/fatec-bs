  -- tipos de dados e funções
    maiorQue :: Int -> Int -> Bool
    maiorQue x y = (>) x y

-- operações com listas
  dobroLista :: [Int] -> [Int]
  dobroLista xs = [2*x | x<-xs]

-- compreensão de listas (lists comprehensions)
  foo :: Char -> Int -> (Int, String)
  foo x y = (y+9, x:[x])

-- novos tipos de dados
  data	Dia	=	Segunda	|	Terca	|	Quarta	|	Quinta	|	Sexta	|	Sabado	|	Domingo
  agenda	::	Dia	->	String
	agenda	Domingo	=	"TV..."
	agenda	Sabado	=	"Festa"
	agenda	_	=	"Trabalho"

  -- pattern matching
  f	::	(Int,	Int)	->	Int
  f	(0,0)	=	0
  f	(0,1)	=	1
  f	(1,0)	=	1
  f	(x,0)	=	x
  f	(0,y)	=	y
  f	(x,y)	=	x+y

  -- campos de construtor
  data	Pessoa	=	Fisica	String	Int	|	Juridica	String

    -- newtype permite gerar um novo DataConstructor porem com apenas um valueConstructor e um campo. Nao tem lazy valuation, diferente de data
    newtype	Dado	=	Dado	Int
    data	Dado1	=	Dado1	Int
  
-- record syntax
  data	Ponto	=	Ponto	Double	Double

  data	Ponto	=	Ponto	{xval,yval	::	Double}
    Ponto 1.1 2
    Ponto {xval = 1.1, yval = 2.0}
    -- Para	 fazer	 uma	 função	 que	 calcula	 a	 distância	 do	 ponto	 à origem,	podemos	proceder	de	três	formas.

    -- 1. Primeira	forma:
        distOrig	::	Ponto	->	Double
        distOrig	(Ponto	x	y)	=	sqrt(x**2	+	y**2)
    -- 2. Segunda	forma:
        distOrig	::	Ponto	->	Double	
        distOrig	(Ponto	{xval=x,	yval=y})	=	sqrt(x**2	+	y**2)
    -- 3. Terceira	forma:
        distOrig	::	Ponto	->	Double		
        distOrig	p	=	sqrt(xval	p**2	+	yval	p**2)

