'use babel'
/* eslint-env jasmine */

describe('captain-hook', () => {
  let mainModule = null

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage('gofmt').then((pack) => {
        mainModule = pack.mainModule
      })
    })
  })

  describe('when the captain-hook package is activated', () => {
    it('activates successfully', () => {
      expect(mainModule).toBeDefined()
      expect(mainModule).toBeTruthy()
      expect(mainModule.subscriptions).toBeDefined()
      expect(mainModule.subscriptions).toBeTruthy()
    })
  })
})
