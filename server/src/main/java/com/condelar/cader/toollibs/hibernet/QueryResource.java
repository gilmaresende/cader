package com.condelar.cader.toollibs.hibernet;

import com.condelar.cader.tool.csv.ToolCsv;
import com.condelar.cader.tool.download.ToolDownload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/query")
public class QueryResource {

    @Autowired
    private QueryHqlService component;

    @PostMapping
    public ResponseEntity<List<Map>> save(@RequestBody QueryDTO data) {
        List<Map> datas = component.executeToMap(data.getQuery());
        return ResponseEntity.ok().body(datas);
    }

    // @PostMapping
    public ResponseEntity<String> saveMap(@RequestBody QueryDTO query) {
        List<Map> datas = component.executeToMap(query.getQuery());
        String data = ToolCsv.mapToCsv(datas);
        return ResponseEntity.ok().body(data);
    }

    //  @RequestMapping(method = RequestMethod.GET)
    @RequestMapping(method = RequestMethod.GET)
    public HttpEntity<byte[]> saveFile() {
        String queryy = "select e.id as F_ID,u.login as F_LOGIN, e.name as F_NAME from Card e inner join e.user u";
        List<Map> datas = component.executeToMap(queryy);
        String data = ToolCsv.mapToCsv(datas);

        return ToolDownload.getFile("select", "csv", data.getBytes());
    }
}


