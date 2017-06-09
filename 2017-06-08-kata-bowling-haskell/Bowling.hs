module Bowling
where

finalScore :: [ Integer] -> Integer
finalScore (x : y : z : rest)
    | spare = x + y + z * 2 + finalScore (rest)
    | otherwise = x + y + z + finalScore rest
    where spare = x + y == 10
finalScore list = sum list
