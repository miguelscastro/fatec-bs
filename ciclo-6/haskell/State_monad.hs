module Main where

-- 1. A DEFINIÇÃO (Exatamente como no seu slide)
-- O State é uma função envolta em um tipo
newtype State s a = State { runState :: s -> (a, s) }

-- 2. A MAGIA DO ENCANAMENTO (Boilerplate necessário para o Haskell moderno)
-- Para ser Monad, precisa ser Functor e Applicative antes.
instance Functor (State s) where
    fmap f (State g) = State $ \s -> 
        let (a, newState) = g s 
        in (f a, newState)

instance Applicative (State s) where
    pure x = State $ \s -> (x, s)
    (State f) <*> (State g) = State $ \s ->
        let (func, s1) = f s
            (val, s2)  = g s1
        in (func val, s2)

-- AQUI É O BIND (>>=)
instance Monad (State s) where
    return = pure
    (State h) >>= f = State $ \s ->
        let (a, newState) = h s  -- 1. Roda a anterior
            (State g)     = f a  -- 2. Gera a próxima baseada no resultado
        in  g newState           -- 3. Roda a próxima com o NOVO estado

-- 3. AS PRIMITIVAS
get :: State s s
get = State $ \s -> (s, s)

put :: s -> State s ()
put newState = State $ \_ -> ((), newState)

modify :: (s -> s) -> State s ()
modify f = State $ \s -> ((), f s)

-- ==========================================
-- 4. EXEMPLO PRÁTICO: A PILHA (STACK)
-- ==========================================

type Stack = [Int]

pop :: State Stack Int
pop = do
    list <- get
    case list of
        (x:xs) -> do
            put xs
            return x
        [] -> error "Pilha vazia!"

push :: Int -> State Stack ()
push x = do
    list <- get
    put (x:list)

-- A computação complexa usando notação DO
manipulacaoDaPilha :: State Stack Int
manipulacaoDaPilha = do
    push 10         -- Estado: [10]
    push 20         -- Estado: [20, 10]
    push 30         -- Estado: [30, 20, 10]
    val1 <- pop     -- Tira 30
    val2 <- pop     -- Tira 20
    push 500        -- Estado: [500, 10]
    return (val1 + val2) -- Retorna 50 (30+20)

-- ==========================================
-- 5. MAIN (Executando tudo)
-- ==========================================
main :: IO ()
main = do
    putStrLn "--- Teste da Monada State ---"
    
    let estadoInicial = [] :: [Int]
    
    -- Executando com runState (retorna tupla: valor + estado final)
    let resultado = runState manipulacaoDaPilha estadoInicial
    
    putStrLn $ "Estado Inicial: " ++ show estadoInicial
    putStrLn $ "Resultado da computação (30 + 20): " ++ show (fst resultado)
    putStrLn $ "Estado Final da Pilha: " ++ show (snd resultado)
    
    putStrLn "--- Fim ---"