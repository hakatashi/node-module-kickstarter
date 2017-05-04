require! {
  '../index.babel.js': the-module-name-to-fill-in
  chai: {expect}
}

{it: It, describe: Describe} = global

Describe 'theModuleNameToFillIn' ->
  It 'can do something' ->
    expect the-module-name-to-fill-in 10 .to.equal 5
    expect the-module-name-to-fill-in 9 .to.equal 28
