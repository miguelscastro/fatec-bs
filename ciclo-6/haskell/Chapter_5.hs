module Chapter_5 where
-- 5.1)	 Crie	 o	 tipo	 	 TipoProduto	 	 que	 possui	 os	 values constructors 	Escritorio	,	 	Informatica	,	 	Livro	,	 	Filme		 e 	Total	.	 O	 tipo	 	Produto		 possui	 um	 value	 constructor	 -	 de mesmo	 nome	 -	 e	 os	 campos	 	 valor	 	 (	 Double	 ),	 	 tp	(	TipoProduto	)	e	um	value	constructor		Nada	,	que	representa	a ausência	de	um		Produto	. Deseja-se	calcular	o	valor	total	de	uma	compra,	de	modo	a	não ter	nenhuma	conversão	para	inteiro	e	de	forma	combinável.	Crie uma	instância	de	monoide	para		Produto	,	de	modo	que	o	retorno sempre	tenha		Total		no	campo		tp		e	a	soma	dos	dois	produtos em	 	 valor	 .
  data TipoProduto
    = Escritorio
    | Informatica
    | Livro
    | Filme
    | Total
    deriving (Show)

  data Produto
    = Produto
        { valor :: Double
        , tp    :: TipoProduto
        }
    | Nada
    deriving (Show)

  somaProduto :: [Produto] -> Produto
  somaProduto =
    foldl (\pt pd -> Produto (valor pt + valor pd) Total) (Produto 0 Total)

-- 5.5)	Crie	o	tipo		Paridade		com	os	values	constructors 	Par		e	Impar	.	Crie	o	typeclass 	ParImpar		que	contém	a	função		decide ::	a	->	Paridade		e	possui	as	instâncias:
  data Paridade = Par | Impar deriving Show

  class ParImpar a where
    decide :: a -> Paridade
  -- Para		Int	:	noção	de	Par/Impar	de		Int	.
  instance ParImpar Int where
    decide n = if even n then Par else Impar

  -- Para		[a]	:	uma	lista	de	elementos	qualquer	é		Par		se o	número	de	elementos	o	for.
  instance ParImpar [a] where
    decide xs = if even (length xs) then Par else Impar
    
  -- 	Bool	:		False		como		Par	,		True		como		Impar	.
  instance ParImpar Bool where
    decide False = Par
    decide True = Impar

-- 5.7)	Usando	a	estrutura	de	árvore,	monte	uma	função		mapa, que	 jogue	 uma	 função	 passada	 por	 parâmetro	 para	 todos	 os elementos	de	uma	árvore.	Deixe	explícito	o	tipo	desta	função.
  data Arvore a
    = Nulo
    | Leaf a
    | Branch a (Arvore a) (Arvore a)
    deriving (Show)

  mapa :: (a -> b) -> Arvore a -> Arvore b
  mapa _ Nulo = Nulo
  mapa f (Leaf x) = Leaf (f x)
  mapa f (Branch x esquerda direita) = Branch (f x) (mapa f esquerda) (mapa f direita)

-- 5.8)	 Usando	 o	 exercício	 anterior,	 some	 5	 a	 cada	 elemento	 de uma	árvore	de	inteiros.
  somar5 :: Arvore Int -> Arvore Int
  somar5 arvore = mapa (+5) arvore