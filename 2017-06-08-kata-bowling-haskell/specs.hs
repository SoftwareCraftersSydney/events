module Main
where
import Test.Hspec
import Bowling

only20times seed = (take 20 . cycle) seed

main :: IO()
main = hspec $ do
    describe "Adding number together" $ do
        it "should correctly do addition" $ do
            1 + 1 `shouldBe` 2
    describe "Bowling score" $ do

        it "should return 0 if all gutter ball" $ do
            finalScore (only20times [0]) `shouldBe` 0

        it "should calculate the score for a so so player" $ do
            finalScore (only20times [3, 2]) `shouldBe` 50

        it "doubles the next throw after the last two throws sum up to 10" $ do
            let
              spare = [4, 6]
              in finalScore ( spare ++ [3, 1]) `shouldBe` 17
        it "take in account the round of 2" $ do
            let
              round1 = [0, 0]
              round2 = [3, 3]
              round3 = [7, 1]
              in finalScore (round1 ++ round2 ++ round3) `shouldBe` 14
