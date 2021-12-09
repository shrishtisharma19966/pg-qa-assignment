package O4S;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Response {
    private String id;
    private String name;
    private String powerlevel;
    private String errorCode;
    private String error;
    private String message;
}
