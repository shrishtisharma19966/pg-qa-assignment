package O4S;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class Assignment {
@Test
    public static void heroGetApi() {
        RestAssured.baseURI = "http://localhost:3000";
        Response response = RestAssured.given().header("Authorization", "Bearer pag4nt1stoken").
                header("bearerAuth", "pag4nt1stoken").
                when().get("heroes/THR").then().assertThat().statusCode(200).and().contentType(ContentType.JSON).extract().as(Response.class);
        SoftAssert softAssert = new SoftAssert();
        softAssert.assertEquals(response.getId(),"THR","Mismatch response ID");
        softAssert.assertEquals(response.getName(),"Thors","Mismatch response name");
        softAssert.assertEquals(response.getPowerlevel(),"THR","Mismatch response Power Level");
        softAssert.assertAll();
    }

        @Test
        public static void addHeroApi() {
            RestAssured.baseURI = "http://localhost:3000";
            String requestBody = " { 'firstName': 'ABC'}";
            Response response = RestAssured.given().header("Authorization", "Bearer pag4nt1stoken").
                    header("bearerAuth", "pag4nt1stoken").body(requestBody).
                    when().post("/fight/addHero").then().assertThat().statusCode(400).and().contentType(ContentType.JSON).extract().as(Response.class);
            SoftAssert softAssert = new SoftAssert();
            softAssert.assertEquals(response.getErrorCode(),"1002","Mismatch response error code");
            softAssert.assertEquals(response.getError(),"Hero ID must be passed on the POST request","Mismatch response error");
            softAssert.assertAll();
        }



        @Test
        public static void fightApi() {
            RestAssured.baseURI = "http://localhost:3000";
            Response response = RestAssured.given().header("Authorization", "Bearer pag4nt1stoken").
                    header("bearerAuth", "pag4nt1stoken").
                    when().post("/fight").then().assertThat().statusCode(500).and().contentType(ContentType.JSON).extract().as(Response.class);
            softAssert.assertAll();
        }

        @Test
        public static void resetFightApi() {
            RestAssured.baseURI = "http://localhost:3000";
            Response response = RestAssured.given().header("Authorization", "Bearer pag4nt1stoken").
                    header("bearerAuth", "pag4nt1stoken").
                    when().delete("/fight").then().assertThat().statusCode(200).and().contentType(ContentType.JSON).extract().as(Response.class);
            SoftAssert softAssert = new SoftAssert();
            softAssert.assertEquals(response.getMessage(),"Fight has been deleted and now all heroes went back to Helicarrier Ship.","Mismatch response Message");
            softAssert.assertAll();
        }
}
