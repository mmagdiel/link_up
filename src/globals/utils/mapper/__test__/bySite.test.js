import { byHebrew, byEnglish, bySpanish, byJapanese } from "../__mock__/bySite"
//import value from "../globals/data/sites.json"
import yieldDefaultSiteOrFindSiteByRoute from "../bySite"

describe("Name of the group", () => {
  const findRoute = yieldDefaultSiteOrFindSiteByRoute(bySpanish)
  test("should ", () => {
    const route = findRoute("hebrew")
    expect(route).toBe(byHebrew)
  })
})
