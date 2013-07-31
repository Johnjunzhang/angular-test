$ideaRunConfigPath = ".idea\runConfigurations"
if(Test-Path $ideaRunConfigPath){
   Get-ChildItem "webStormConfigs\runConfigurations" | ?{
   		(Test-Path "$ideaRunConfigPath\$($_.Name)") -eq $false
   		Write-Host $_FullName
   }|%{
   		Copy-Item $_.FullName ".idea\runConfigurations"
   }	
} else {
	Copy-Item .\webStormConfigs\runConfigurations .idea -R -Force
}
